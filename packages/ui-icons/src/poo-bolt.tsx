import { faPooBolt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PooBolt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PooBolt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPooBolt} {...props} />;
};

export default PooBolt;

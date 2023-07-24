import { faDrum } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Drum icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Drum = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDrum} {...props} />;
};

export default Drum;

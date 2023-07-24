import { faMitten } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Mitten icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Mitten = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMitten} {...props} />;
};

export default Mitten;

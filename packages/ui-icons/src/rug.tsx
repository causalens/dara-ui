import { faRug } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Rug icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Rug = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRug} {...props} />;
};

export default Rug;

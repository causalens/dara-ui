import { faDna } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Dna icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Dna = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDna} {...props} />;
};

export default Dna;
